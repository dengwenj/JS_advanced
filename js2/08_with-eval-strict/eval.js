const str = 'const msg = "pumu"; console.log(msg);'
eval(str)

/**
 * eval 代码的可读性非常的差
 * eval 是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险
 * eval 的执行必须经过 JS 解释器，不能被 JS 引擎优化
 */
