var data = {lines:[
{"lineNum":"    1","line":"/**********************************************************************"},
{"lineNum":"    2","line":" * Copyright (c) 2013, 2014 Pieter Wuille                             *"},
{"lineNum":"    3","line":" * Distributed under the MIT software license, see the accompanying   *"},
{"lineNum":"    4","line":" * file COPYING or http://www.opensource.org/licenses/mit-license.php.*"},
{"lineNum":"    5","line":" **********************************************************************/"},
{"lineNum":"    6","line":""},
{"lineNum":"    7","line":"#ifndef SECP256K1_UTIL_H"},
{"lineNum":"    8","line":"#define SECP256K1_UTIL_H"},
{"lineNum":"    9","line":""},
{"lineNum":"   10","line":"#if defined HAVE_CONFIG_H"},
{"lineNum":"   11","line":"#include \"libsecp256k1-config.h\""},
{"lineNum":"   12","line":"#endif"},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"#include <stdlib.h>"},
{"lineNum":"   15","line":"#include <stdint.h>"},
{"lineNum":"   16","line":"#include <stdio.h>"},
{"lineNum":"   17","line":""},
{"lineNum":"   18","line":"typedef struct {"},
{"lineNum":"   19","line":"    void (*fn)(const char *text, void* data);"},
{"lineNum":"   20","line":"    const void* data;"},
{"lineNum":"   21","line":"} secp256k1_callback;"},
{"lineNum":"   22","line":""},
{"lineNum":"   23","line":"static SECP256K1_INLINE void secp256k1_callback_call(const secp256k1_callback * const cb, const char * const text) {","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   24","line":"    cb->fn(text, (void*)cb->data);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   25","line":"}","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"   26","line":""},
{"lineNum":"   27","line":"#ifdef DETERMINISTIC"},
{"lineNum":"   28","line":"#define TEST_FAILURE(msg) do { \\"},
{"lineNum":"   29","line":"    fprintf(stderr, \"%s\\n\", msg); \\"},
{"lineNum":"   30","line":"    abort(); \\"},
{"lineNum":"   31","line":"} while(0);"},
{"lineNum":"   32","line":"#else"},
{"lineNum":"   33","line":"#define TEST_FAILURE(msg) do { \\"},
{"lineNum":"   34","line":"    fprintf(stderr, \"%s:%d: %s\\n\", __FILE__, __LINE__, msg); \\"},
{"lineNum":"   35","line":"    abort(); \\"},
{"lineNum":"   36","line":"} while(0)"},
{"lineNum":"   37","line":"#endif"},
{"lineNum":"   38","line":""},
{"lineNum":"   39","line":"#if SECP256K1_GNUC_PREREQ(3, 0)"},
{"lineNum":"   40","line":"#define EXPECT(x,c) __builtin_expect((x),(c))"},
{"lineNum":"   41","line":"#else"},
{"lineNum":"   42","line":"#define EXPECT(x,c) (x)"},
{"lineNum":"   43","line":"#endif"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"#ifdef DETERMINISTIC"},
{"lineNum":"   46","line":"#define CHECK(cond) do { \\"},
{"lineNum":"   47","line":"    if (EXPECT(!(cond), 0)) { \\"},
{"lineNum":"   48","line":"        TEST_FAILURE(\"test condition failed\"); \\"},
{"lineNum":"   49","line":"    } \\"},
{"lineNum":"   50","line":"} while(0)"},
{"lineNum":"   51","line":"#else"},
{"lineNum":"   52","line":"#define CHECK(cond) do { \\"},
{"lineNum":"   53","line":"    if (EXPECT(!(cond), 0)) { \\"},
{"lineNum":"   54","line":"        TEST_FAILURE(\"test condition failed: \" #cond); \\"},
{"lineNum":"   55","line":"    } \\"},
{"lineNum":"   56","line":"} while(0)"},
{"lineNum":"   57","line":"#endif"},
{"lineNum":"   58","line":""},
{"lineNum":"   59","line":"/* Like assert(), but when VERIFY is defined, and side-effect safe. */"},
{"lineNum":"   60","line":"#if defined(COVERAGE)"},
{"lineNum":"   61","line":"#define VERIFY_CHECK(check)"},
{"lineNum":"   62","line":"#define VERIFY_SETUP(stmt)"},
{"lineNum":"   63","line":"#elif defined(VERIFY)"},
{"lineNum":"   64","line":"#define VERIFY_CHECK CHECK"},
{"lineNum":"   65","line":"#define VERIFY_SETUP(stmt) do { stmt; } while(0)"},
{"lineNum":"   66","line":"#else"},
{"lineNum":"   67","line":"#define VERIFY_CHECK(cond) do { (void)(cond); } while(0)"},
{"lineNum":"   68","line":"#define VERIFY_SETUP(stmt)"},
{"lineNum":"   69","line":"#endif"},
{"lineNum":"   70","line":""},
{"lineNum":"   71","line":"#if defined(__BIGGEST_ALIGNMENT__)"},
{"lineNum":"   72","line":"#define ALIGNMENT __BIGGEST_ALIGNMENT__"},
{"lineNum":"   73","line":"#else"},
{"lineNum":"   74","line":"/* Using 16 bytes alignment because common architectures never have alignment"},
{"lineNum":"   75","line":" * requirements above 8 for any of the types we care about. In addition we"},
{"lineNum":"   76","line":" * leave some room because currently we don\'t care about a few bytes. */"},
{"lineNum":"   77","line":"#define ALIGNMENT 16"},
{"lineNum":"   78","line":"#endif"},
{"lineNum":"   79","line":""},
{"lineNum":"   80","line":"#define ROUND_TO_ALIGN(size) (((size + ALIGNMENT - 1) / ALIGNMENT) * ALIGNMENT)"},
{"lineNum":"   81","line":""},
{"lineNum":"   82","line":"/* Assume there is a contiguous memory object with bounds [base, base + max_size)"},
{"lineNum":"   83","line":" * of which the memory range [base, *prealloc_ptr) is already allocated for usage,"},
{"lineNum":"   84","line":" * where *prealloc_ptr is an aligned pointer. In that setting, this functions"},
{"lineNum":"   85","line":" * reserves the subobject [*prealloc_ptr, *prealloc_ptr + alloc_size) of"},
{"lineNum":"   86","line":" * alloc_size bytes by increasing *prealloc_ptr accordingly, taking into account"},
{"lineNum":"   87","line":" * alignment requirements."},
{"lineNum":"   88","line":" *"},
{"lineNum":"   89","line":" * The function returns an aligned pointer to the newly allocated subobject."},
{"lineNum":"   90","line":" *"},
{"lineNum":"   91","line":" * This is useful for manual memory management: if we\'re simply given a block"},
{"lineNum":"   92","line":" * [base, base + max_size), the caller can use this function to allocate memory"},
{"lineNum":"   93","line":" * in this block and keep track of the current allocation state with *prealloc_ptr."},
{"lineNum":"   94","line":" *"},
{"lineNum":"   95","line":" * It is VERIFY_CHECKed that there is enough space left in the memory object and"},
{"lineNum":"   96","line":" * *prealloc_ptr is aligned relative to base."},
{"lineNum":"   97","line":" */"},
{"lineNum":"   98","line":"static SECP256K1_INLINE void *manual_alloc(void** prealloc_ptr, size_t alloc_size, void* base, size_t max_size) {","class":"lineCov","hits":"1","order":"3871","possible_hits":"1",},
{"lineNum":"   99","line":"    size_t aligned_alloc_size = ROUND_TO_ALIGN(alloc_size);","class":"lineCov","hits":"1","order":"3872","possible_hits":"1",},
{"lineNum":"  100","line":"    void* ret;"},
{"lineNum":"  101","line":"    VERIFY_CHECK(prealloc_ptr != NULL);"},
{"lineNum":"  102","line":"    VERIFY_CHECK(*prealloc_ptr != NULL);"},
{"lineNum":"  103","line":"    VERIFY_CHECK(base != NULL);"},
{"lineNum":"  104","line":"    VERIFY_CHECK((unsigned char*)*prealloc_ptr >= (unsigned char*)base);"},
{"lineNum":"  105","line":"    VERIFY_CHECK(((unsigned char*)*prealloc_ptr - (unsigned char*)base) % ALIGNMENT == 0);"},
{"lineNum":"  106","line":"    VERIFY_CHECK((unsigned char*)*prealloc_ptr - (unsigned char*)base + aligned_alloc_size <= max_size);"},
{"lineNum":"  107","line":"    ret = *prealloc_ptr;","class":"lineCov","hits":"1","order":"3873","possible_hits":"1",},
{"lineNum":"  108","line":"    *((unsigned char**)prealloc_ptr) += aligned_alloc_size;","class":"lineCov","hits":"1","order":"3874","possible_hits":"1",},
{"lineNum":"  109","line":"    return ret;","class":"lineCov","hits":"1","order":"3875","possible_hits":"1",},
{"lineNum":"  110","line":"}","class":"linePartCov","hits":"1","order":"3876","possible_hits":"2",},
{"lineNum":"  111","line":""},
{"lineNum":"  112","line":"/* Macro for restrict, when available and not in a VERIFY build. */"},
{"lineNum":"  113","line":"#if defined(SECP256K1_BUILD) && defined(VERIFY)"},
{"lineNum":"  114","line":"# define SECP256K1_RESTRICT"},
{"lineNum":"  115","line":"#else"},
{"lineNum":"  116","line":"# if (!defined(__STDC_VERSION__) || (__STDC_VERSION__ < 199901L) )"},
{"lineNum":"  117","line":"#  if SECP256K1_GNUC_PREREQ(3,0)"},
{"lineNum":"  118","line":"#   define SECP256K1_RESTRICT __restrict__"},
{"lineNum":"  119","line":"#  elif (defined(_MSC_VER) && _MSC_VER >= 1400)"},
{"lineNum":"  120","line":"#   define SECP256K1_RESTRICT __restrict"},
{"lineNum":"  121","line":"#  else"},
{"lineNum":"  122","line":"#   define SECP256K1_RESTRICT"},
{"lineNum":"  123","line":"#  endif"},
{"lineNum":"  124","line":"# else"},
{"lineNum":"  125","line":"#  define SECP256K1_RESTRICT restrict"},
{"lineNum":"  126","line":"# endif"},
{"lineNum":"  127","line":"#endif"},
{"lineNum":"  128","line":""},
{"lineNum":"  129","line":"#if defined(_WIN32)"},
{"lineNum":"  130","line":"# define I64FORMAT \"I64d\""},
{"lineNum":"  131","line":"# define I64uFORMAT \"I64u\""},
{"lineNum":"  132","line":"#else"},
{"lineNum":"  133","line":"# define I64FORMAT \"lld\""},
{"lineNum":"  134","line":"# define I64uFORMAT \"llu\""},
{"lineNum":"  135","line":"#endif"},
{"lineNum":"  136","line":""},
{"lineNum":"  137","line":"#if defined(HAVE___INT128)"},
{"lineNum":"  138","line":"# if defined(__GNUC__)"},
{"lineNum":"  139","line":"#  define SECP256K1_GNUC_EXT __extension__"},
{"lineNum":"  140","line":"# else"},
{"lineNum":"  141","line":"#  define SECP256K1_GNUC_EXT"},
{"lineNum":"  142","line":"# endif"},
{"lineNum":"  143","line":"SECP256K1_GNUC_EXT typedef unsigned __int128 uint128_t;"},
{"lineNum":"  144","line":"#endif"},
{"lineNum":"  145","line":""},
{"lineNum":"  146","line":"#endif /* SECP256K1_UTIL_H */"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "ser_de-d029ad6af9d5a7c5", "date" : "2019-08-31 07:54:50", "instrumented" : 9, "covered" : 6,};
var merged_data = [];
