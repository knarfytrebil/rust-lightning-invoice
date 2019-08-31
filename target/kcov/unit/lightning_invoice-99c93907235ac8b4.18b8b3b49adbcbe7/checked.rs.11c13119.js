var data = {lines:[
{"lineNum":"    1","line":"use core::ops::{Add, Div, Mul, Rem, Shl, Shr, Sub};"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"/// Performs addition that returns `None` instead of wrapping around on"},
{"lineNum":"    4","line":"/// overflow."},
{"lineNum":"    5","line":"pub trait CheckedAdd: Sized + Add<Self, Output = Self> {"},
{"lineNum":"    6","line":"    /// Adds two numbers, checking for overflow. If overflow happens, `None` is"},
{"lineNum":"    7","line":"    /// returned."},
{"lineNum":"    8","line":"    fn checked_add(&self, v: &Self) -> Option<Self>;"},
{"lineNum":"    9","line":"}"},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"macro_rules! checked_impl {"},
{"lineNum":"   12","line":"    ($trait_name:ident, $method:ident, $t:ty) => {"},
{"lineNum":"   13","line":"        impl $trait_name for $t {"},
{"lineNum":"   14","line":"            #[inline]"},
{"lineNum":"   15","line":"            fn $method(&self, v: &$t) -> Option<$t> {","class":"lineCov","hits":"8","order":"2246","possible_hits":"8",},
{"lineNum":"   16","line":"                <$t>::$method(*self, *v)","class":"lineCov","hits":"8","order":"2247","possible_hits":"8",},
{"lineNum":"   17","line":"            }","class":"linePartCov","hits":"8","order":"2254","possible_hits":"16",},
{"lineNum":"   18","line":"        }"},
{"lineNum":"   19","line":"    };"},
{"lineNum":"   20","line":"}"},
{"lineNum":"   21","line":""},
{"lineNum":"   22","line":"checked_impl!(CheckedAdd, checked_add, u8);"},
{"lineNum":"   23","line":"checked_impl!(CheckedAdd, checked_add, u16);"},
{"lineNum":"   24","line":"checked_impl!(CheckedAdd, checked_add, u32);"},
{"lineNum":"   25","line":"checked_impl!(CheckedAdd, checked_add, u64);"},
{"lineNum":"   26","line":"checked_impl!(CheckedAdd, checked_add, usize);"},
{"lineNum":"   27","line":"#[cfg(has_i128)]"},
{"lineNum":"   28","line":"checked_impl!(CheckedAdd, checked_add, u128);"},
{"lineNum":"   29","line":""},
{"lineNum":"   30","line":"checked_impl!(CheckedAdd, checked_add, i8);"},
{"lineNum":"   31","line":"checked_impl!(CheckedAdd, checked_add, i16);"},
{"lineNum":"   32","line":"checked_impl!(CheckedAdd, checked_add, i32);"},
{"lineNum":"   33","line":"checked_impl!(CheckedAdd, checked_add, i64);"},
{"lineNum":"   34","line":"checked_impl!(CheckedAdd, checked_add, isize);"},
{"lineNum":"   35","line":"#[cfg(has_i128)]"},
{"lineNum":"   36","line":"checked_impl!(CheckedAdd, checked_add, i128);"},
{"lineNum":"   37","line":""},
{"lineNum":"   38","line":"/// Performs subtraction that returns `None` instead of wrapping around on underflow."},
{"lineNum":"   39","line":"pub trait CheckedSub: Sized + Sub<Self, Output = Self> {"},
{"lineNum":"   40","line":"    /// Subtracts two numbers, checking for underflow. If underflow happens,"},
{"lineNum":"   41","line":"    /// `None` is returned."},
{"lineNum":"   42","line":"    fn checked_sub(&self, v: &Self) -> Option<Self>;"},
{"lineNum":"   43","line":"}"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"checked_impl!(CheckedSub, checked_sub, u8);"},
{"lineNum":"   46","line":"checked_impl!(CheckedSub, checked_sub, u16);"},
{"lineNum":"   47","line":"checked_impl!(CheckedSub, checked_sub, u32);"},
{"lineNum":"   48","line":"checked_impl!(CheckedSub, checked_sub, u64);"},
{"lineNum":"   49","line":"checked_impl!(CheckedSub, checked_sub, usize);"},
{"lineNum":"   50","line":"#[cfg(has_i128)]"},
{"lineNum":"   51","line":"checked_impl!(CheckedSub, checked_sub, u128);"},
{"lineNum":"   52","line":""},
{"lineNum":"   53","line":"checked_impl!(CheckedSub, checked_sub, i8);"},
{"lineNum":"   54","line":"checked_impl!(CheckedSub, checked_sub, i16);"},
{"lineNum":"   55","line":"checked_impl!(CheckedSub, checked_sub, i32);"},
{"lineNum":"   56","line":"checked_impl!(CheckedSub, checked_sub, i64);"},
{"lineNum":"   57","line":"checked_impl!(CheckedSub, checked_sub, isize);"},
{"lineNum":"   58","line":"#[cfg(has_i128)]"},
{"lineNum":"   59","line":"checked_impl!(CheckedSub, checked_sub, i128);"},
{"lineNum":"   60","line":""},
{"lineNum":"   61","line":"/// Performs multiplication that returns `None` instead of wrapping around on underflow or"},
{"lineNum":"   62","line":"/// overflow."},
{"lineNum":"   63","line":"pub trait CheckedMul: Sized + Mul<Self, Output = Self> {"},
{"lineNum":"   64","line":"    /// Multiplies two numbers, checking for underflow or overflow. If underflow"},
{"lineNum":"   65","line":"    /// or overflow happens, `None` is returned."},
{"lineNum":"   66","line":"    fn checked_mul(&self, v: &Self) -> Option<Self>;"},
{"lineNum":"   67","line":"}"},
{"lineNum":"   68","line":""},
{"lineNum":"   69","line":"checked_impl!(CheckedMul, checked_mul, u8);"},
{"lineNum":"   70","line":"checked_impl!(CheckedMul, checked_mul, u16);"},
{"lineNum":"   71","line":"checked_impl!(CheckedMul, checked_mul, u32);"},
{"lineNum":"   72","line":"checked_impl!(CheckedMul, checked_mul, u64);"},
{"lineNum":"   73","line":"checked_impl!(CheckedMul, checked_mul, usize);"},
{"lineNum":"   74","line":"#[cfg(has_i128)]"},
{"lineNum":"   75","line":"checked_impl!(CheckedMul, checked_mul, u128);"},
{"lineNum":"   76","line":""},
{"lineNum":"   77","line":"checked_impl!(CheckedMul, checked_mul, i8);"},
{"lineNum":"   78","line":"checked_impl!(CheckedMul, checked_mul, i16);"},
{"lineNum":"   79","line":"checked_impl!(CheckedMul, checked_mul, i32);"},
{"lineNum":"   80","line":"checked_impl!(CheckedMul, checked_mul, i64);"},
{"lineNum":"   81","line":"checked_impl!(CheckedMul, checked_mul, isize);"},
{"lineNum":"   82","line":"#[cfg(has_i128)]"},
{"lineNum":"   83","line":"checked_impl!(CheckedMul, checked_mul, i128);"},
{"lineNum":"   84","line":""},
{"lineNum":"   85","line":"/// Performs division that returns `None` instead of panicking on division by zero and instead of"},
{"lineNum":"   86","line":"/// wrapping around on underflow and overflow."},
{"lineNum":"   87","line":"pub trait CheckedDiv: Sized + Div<Self, Output = Self> {"},
{"lineNum":"   88","line":"    /// Divides two numbers, checking for underflow, overflow and division by"},
{"lineNum":"   89","line":"    /// zero. If any of that happens, `None` is returned."},
{"lineNum":"   90","line":"    fn checked_div(&self, v: &Self) -> Option<Self>;"},
{"lineNum":"   91","line":"}"},
{"lineNum":"   92","line":""},
{"lineNum":"   93","line":"checked_impl!(CheckedDiv, checked_div, u8);"},
{"lineNum":"   94","line":"checked_impl!(CheckedDiv, checked_div, u16);"},
{"lineNum":"   95","line":"checked_impl!(CheckedDiv, checked_div, u32);"},
{"lineNum":"   96","line":"checked_impl!(CheckedDiv, checked_div, u64);"},
{"lineNum":"   97","line":"checked_impl!(CheckedDiv, checked_div, usize);"},
{"lineNum":"   98","line":"#[cfg(has_i128)]"},
{"lineNum":"   99","line":"checked_impl!(CheckedDiv, checked_div, u128);"},
{"lineNum":"  100","line":""},
{"lineNum":"  101","line":"checked_impl!(CheckedDiv, checked_div, i8);"},
{"lineNum":"  102","line":"checked_impl!(CheckedDiv, checked_div, i16);"},
{"lineNum":"  103","line":"checked_impl!(CheckedDiv, checked_div, i32);"},
{"lineNum":"  104","line":"checked_impl!(CheckedDiv, checked_div, i64);"},
{"lineNum":"  105","line":"checked_impl!(CheckedDiv, checked_div, isize);"},
{"lineNum":"  106","line":"#[cfg(has_i128)]"},
{"lineNum":"  107","line":"checked_impl!(CheckedDiv, checked_div, i128);"},
{"lineNum":"  108","line":""},
{"lineNum":"  109","line":"/// Performs an integral remainder that returns `None` instead of panicking on division by zero and"},
{"lineNum":"  110","line":"/// instead of wrapping around on underflow and overflow."},
{"lineNum":"  111","line":"pub trait CheckedRem: Sized + Rem<Self, Output = Self> {"},
{"lineNum":"  112","line":"    /// Finds the remainder of dividing two numbers, checking for underflow, overflow and division"},
{"lineNum":"  113","line":"    /// by zero. If any of that happens, `None` is returned."},
{"lineNum":"  114","line":"    ///"},
{"lineNum":"  115","line":"    /// # Examples"},
{"lineNum":"  116","line":"    ///"},
{"lineNum":"  117","line":"    /// ```"},
{"lineNum":"  118","line":"    /// use num_traits::CheckedRem;"},
{"lineNum":"  119","line":"    /// use std::i32::MIN;"},
{"lineNum":"  120","line":"    ///"},
{"lineNum":"  121","line":"    /// assert_eq!(CheckedRem::checked_rem(&10, &7), Some(3));"},
{"lineNum":"  122","line":"    /// assert_eq!(CheckedRem::checked_rem(&10, &-7), Some(3));"},
{"lineNum":"  123","line":"    /// assert_eq!(CheckedRem::checked_rem(&-10, &7), Some(-3));"},
{"lineNum":"  124","line":"    /// assert_eq!(CheckedRem::checked_rem(&-10, &-7), Some(-3));"},
{"lineNum":"  125","line":"    ///"},
{"lineNum":"  126","line":"    /// assert_eq!(CheckedRem::checked_rem(&10, &0), None);"},
{"lineNum":"  127","line":"    ///"},
{"lineNum":"  128","line":"    /// assert_eq!(CheckedRem::checked_rem(&MIN, &1), Some(0));"},
{"lineNum":"  129","line":"    /// assert_eq!(CheckedRem::checked_rem(&MIN, &-1), None);"},
{"lineNum":"  130","line":"    /// ```"},
{"lineNum":"  131","line":"    fn checked_rem(&self, v: &Self) -> Option<Self>;"},
{"lineNum":"  132","line":"}"},
{"lineNum":"  133","line":""},
{"lineNum":"  134","line":"checked_impl!(CheckedRem, checked_rem, u8);"},
{"lineNum":"  135","line":"checked_impl!(CheckedRem, checked_rem, u16);"},
{"lineNum":"  136","line":"checked_impl!(CheckedRem, checked_rem, u32);"},
{"lineNum":"  137","line":"checked_impl!(CheckedRem, checked_rem, u64);"},
{"lineNum":"  138","line":"checked_impl!(CheckedRem, checked_rem, usize);"},
{"lineNum":"  139","line":"#[cfg(has_i128)]"},
{"lineNum":"  140","line":"checked_impl!(CheckedRem, checked_rem, u128);"},
{"lineNum":"  141","line":""},
{"lineNum":"  142","line":"checked_impl!(CheckedRem, checked_rem, i8);"},
{"lineNum":"  143","line":"checked_impl!(CheckedRem, checked_rem, i16);"},
{"lineNum":"  144","line":"checked_impl!(CheckedRem, checked_rem, i32);"},
{"lineNum":"  145","line":"checked_impl!(CheckedRem, checked_rem, i64);"},
{"lineNum":"  146","line":"checked_impl!(CheckedRem, checked_rem, isize);"},
{"lineNum":"  147","line":"#[cfg(has_i128)]"},
{"lineNum":"  148","line":"checked_impl!(CheckedRem, checked_rem, i128);"},
{"lineNum":"  149","line":""},
{"lineNum":"  150","line":"macro_rules! checked_impl_unary {"},
{"lineNum":"  151","line":"    ($trait_name:ident, $method:ident, $t:ty) => {"},
{"lineNum":"  152","line":"        impl $trait_name for $t {"},
{"lineNum":"  153","line":"            #[inline]"},
{"lineNum":"  154","line":"            fn $method(&self) -> Option<$t> {"},
{"lineNum":"  155","line":"                <$t>::$method(*self)"},
{"lineNum":"  156","line":"            }"},
{"lineNum":"  157","line":"        }"},
{"lineNum":"  158","line":"    };"},
{"lineNum":"  159","line":"}"},
{"lineNum":"  160","line":""},
{"lineNum":"  161","line":"/// Performs negation that returns `None` if the result can\'t be represented."},
{"lineNum":"  162","line":"pub trait CheckedNeg: Sized {"},
{"lineNum":"  163","line":"    /// Negates a number, returning `None` for results that can\'t be represented, like signed `MIN`"},
{"lineNum":"  164","line":"    /// values that can\'t be positive, or non-zero unsigned values that can\'t be negative."},
{"lineNum":"  165","line":"    ///"},
{"lineNum":"  166","line":"    /// # Examples"},
{"lineNum":"  167","line":"    ///"},
{"lineNum":"  168","line":"    /// ```"},
{"lineNum":"  169","line":"    /// use num_traits::CheckedNeg;"},
{"lineNum":"  170","line":"    /// use std::i32::MIN;"},
{"lineNum":"  171","line":"    ///"},
{"lineNum":"  172","line":"    /// assert_eq!(CheckedNeg::checked_neg(&1_i32), Some(-1));"},
{"lineNum":"  173","line":"    /// assert_eq!(CheckedNeg::checked_neg(&-1_i32), Some(1));"},
{"lineNum":"  174","line":"    /// assert_eq!(CheckedNeg::checked_neg(&MIN), None);"},
{"lineNum":"  175","line":"    ///"},
{"lineNum":"  176","line":"    /// assert_eq!(CheckedNeg::checked_neg(&0_u32), Some(0));"},
{"lineNum":"  177","line":"    /// assert_eq!(CheckedNeg::checked_neg(&1_u32), None);"},
{"lineNum":"  178","line":"    /// ```"},
{"lineNum":"  179","line":"    fn checked_neg(&self) -> Option<Self>;"},
{"lineNum":"  180","line":"}"},
{"lineNum":"  181","line":""},
{"lineNum":"  182","line":"checked_impl_unary!(CheckedNeg, checked_neg, u8);"},
{"lineNum":"  183","line":"checked_impl_unary!(CheckedNeg, checked_neg, u16);"},
{"lineNum":"  184","line":"checked_impl_unary!(CheckedNeg, checked_neg, u32);"},
{"lineNum":"  185","line":"checked_impl_unary!(CheckedNeg, checked_neg, u64);"},
{"lineNum":"  186","line":"checked_impl_unary!(CheckedNeg, checked_neg, usize);"},
{"lineNum":"  187","line":"#[cfg(has_i128)]"},
{"lineNum":"  188","line":"checked_impl_unary!(CheckedNeg, checked_neg, u128);"},
{"lineNum":"  189","line":""},
{"lineNum":"  190","line":"checked_impl_unary!(CheckedNeg, checked_neg, i8);"},
{"lineNum":"  191","line":"checked_impl_unary!(CheckedNeg, checked_neg, i16);"},
{"lineNum":"  192","line":"checked_impl_unary!(CheckedNeg, checked_neg, i32);"},
{"lineNum":"  193","line":"checked_impl_unary!(CheckedNeg, checked_neg, i64);"},
{"lineNum":"  194","line":"checked_impl_unary!(CheckedNeg, checked_neg, isize);"},
{"lineNum":"  195","line":"#[cfg(has_i128)]"},
{"lineNum":"  196","line":"checked_impl_unary!(CheckedNeg, checked_neg, i128);"},
{"lineNum":"  197","line":""},
{"lineNum":"  198","line":"/// Performs a left shift that returns `None` on shifts larger than"},
{"lineNum":"  199","line":"/// the type width."},
{"lineNum":"  200","line":"pub trait CheckedShl: Sized + Shl<u32, Output = Self> {"},
{"lineNum":"  201","line":"    /// Checked shift left. Computes `self << rhs`, returning `None`"},
{"lineNum":"  202","line":"    /// if `rhs` is larger than or equal to the number of bits in `self`."},
{"lineNum":"  203","line":"    ///"},
{"lineNum":"  204","line":"    /// ```"},
{"lineNum":"  205","line":"    /// use num_traits::CheckedShl;"},
{"lineNum":"  206","line":"    ///"},
{"lineNum":"  207","line":"    /// let x: u16 = 0x0001;"},
{"lineNum":"  208","line":"    ///"},
{"lineNum":"  209","line":"    /// assert_eq!(CheckedShl::checked_shl(&x, 0),  Some(0x0001));"},
{"lineNum":"  210","line":"    /// assert_eq!(CheckedShl::checked_shl(&x, 1),  Some(0x0002));"},
{"lineNum":"  211","line":"    /// assert_eq!(CheckedShl::checked_shl(&x, 15), Some(0x8000));"},
{"lineNum":"  212","line":"    /// assert_eq!(CheckedShl::checked_shl(&x, 16), None);"},
{"lineNum":"  213","line":"    /// ```"},
{"lineNum":"  214","line":"    fn checked_shl(&self, rhs: u32) -> Option<Self>;"},
{"lineNum":"  215","line":"}"},
{"lineNum":"  216","line":""},
{"lineNum":"  217","line":"macro_rules! checked_shift_impl {"},
{"lineNum":"  218","line":"    ($trait_name:ident, $method:ident, $t:ty) => {"},
{"lineNum":"  219","line":"        impl $trait_name for $t {"},
{"lineNum":"  220","line":"            #[inline]"},
{"lineNum":"  221","line":"            fn $method(&self, rhs: u32) -> Option<$t> {"},
{"lineNum":"  222","line":"                <$t>::$method(*self, rhs)"},
{"lineNum":"  223","line":"            }"},
{"lineNum":"  224","line":"        }"},
{"lineNum":"  225","line":"    };"},
{"lineNum":"  226","line":"}"},
{"lineNum":"  227","line":""},
{"lineNum":"  228","line":"checked_shift_impl!(CheckedShl, checked_shl, u8);"},
{"lineNum":"  229","line":"checked_shift_impl!(CheckedShl, checked_shl, u16);"},
{"lineNum":"  230","line":"checked_shift_impl!(CheckedShl, checked_shl, u32);"},
{"lineNum":"  231","line":"checked_shift_impl!(CheckedShl, checked_shl, u64);"},
{"lineNum":"  232","line":"checked_shift_impl!(CheckedShl, checked_shl, usize);"},
{"lineNum":"  233","line":"#[cfg(has_i128)]"},
{"lineNum":"  234","line":"checked_shift_impl!(CheckedShl, checked_shl, u128);"},
{"lineNum":"  235","line":""},
{"lineNum":"  236","line":"checked_shift_impl!(CheckedShl, checked_shl, i8);"},
{"lineNum":"  237","line":"checked_shift_impl!(CheckedShl, checked_shl, i16);"},
{"lineNum":"  238","line":"checked_shift_impl!(CheckedShl, checked_shl, i32);"},
{"lineNum":"  239","line":"checked_shift_impl!(CheckedShl, checked_shl, i64);"},
{"lineNum":"  240","line":"checked_shift_impl!(CheckedShl, checked_shl, isize);"},
{"lineNum":"  241","line":"#[cfg(has_i128)]"},
{"lineNum":"  242","line":"checked_shift_impl!(CheckedShl, checked_shl, i128);"},
{"lineNum":"  243","line":""},
{"lineNum":"  244","line":"/// Performs a right shift that returns `None` on shifts larger than"},
{"lineNum":"  245","line":"/// the type width."},
{"lineNum":"  246","line":"pub trait CheckedShr: Sized + Shr<u32, Output = Self> {"},
{"lineNum":"  247","line":"    /// Checked shift right. Computes `self >> rhs`, returning `None`"},
{"lineNum":"  248","line":"    /// if `rhs` is larger than or equal to the number of bits in `self`."},
{"lineNum":"  249","line":"    ///"},
{"lineNum":"  250","line":"    /// ```"},
{"lineNum":"  251","line":"    /// use num_traits::CheckedShr;"},
{"lineNum":"  252","line":"    ///"},
{"lineNum":"  253","line":"    /// let x: u16 = 0x8000;"},
{"lineNum":"  254","line":"    ///"},
{"lineNum":"  255","line":"    /// assert_eq!(CheckedShr::checked_shr(&x, 0),  Some(0x8000));"},
{"lineNum":"  256","line":"    /// assert_eq!(CheckedShr::checked_shr(&x, 1),  Some(0x4000));"},
{"lineNum":"  257","line":"    /// assert_eq!(CheckedShr::checked_shr(&x, 15), Some(0x0001));"},
{"lineNum":"  258","line":"    /// assert_eq!(CheckedShr::checked_shr(&x, 16), None);"},
{"lineNum":"  259","line":"    /// ```"},
{"lineNum":"  260","line":"    fn checked_shr(&self, rhs: u32) -> Option<Self>;"},
{"lineNum":"  261","line":"}"},
{"lineNum":"  262","line":""},
{"lineNum":"  263","line":"checked_shift_impl!(CheckedShr, checked_shr, u8);"},
{"lineNum":"  264","line":"checked_shift_impl!(CheckedShr, checked_shr, u16);"},
{"lineNum":"  265","line":"checked_shift_impl!(CheckedShr, checked_shr, u32);"},
{"lineNum":"  266","line":"checked_shift_impl!(CheckedShr, checked_shr, u64);"},
{"lineNum":"  267","line":"checked_shift_impl!(CheckedShr, checked_shr, usize);"},
{"lineNum":"  268","line":"#[cfg(has_i128)]"},
{"lineNum":"  269","line":"checked_shift_impl!(CheckedShr, checked_shr, u128);"},
{"lineNum":"  270","line":""},
{"lineNum":"  271","line":"checked_shift_impl!(CheckedShr, checked_shr, i8);"},
{"lineNum":"  272","line":"checked_shift_impl!(CheckedShr, checked_shr, i16);"},
{"lineNum":"  273","line":"checked_shift_impl!(CheckedShr, checked_shr, i32);"},
{"lineNum":"  274","line":"checked_shift_impl!(CheckedShr, checked_shr, i64);"},
{"lineNum":"  275","line":"checked_shift_impl!(CheckedShr, checked_shr, isize);"},
{"lineNum":"  276","line":"#[cfg(has_i128)]"},
{"lineNum":"  277","line":"checked_shift_impl!(CheckedShr, checked_shr, i128);"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "lightning_invoice-99c93907235ac8b4", "date" : "2019-08-31 07:54:49", "instrumented" : 3, "covered" : 3,};
var merged_data = [];
