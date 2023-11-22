/**
 * 在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要我们自己手动的管理内存，某些编程语言会自动帮我们管理内存
 * 内存的管理都会有如下的生命周期:
 * 1、分配申请你的需要的内存（申请）
 * 2、使用分配的内存
 * 3、不需要使用时，对其进行释放
 * 
 * JS 内存管理
 * JS 会在定义变量时为我们分配内存
 * 内存分配方式是不一样的: JS 对于基本数据类型内存的分配会在执行时直接在栈空间进行分配
 * JS对于复杂数据类型内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用
 * 
 * JS垃圾回收 GC 算法
 * 1、引用计数
 * 当一个对象有一个引用指向它时，那么这个对象的引用就 +1，当一个对象的引用为 0 时，这个对象就可以被销毁掉，这个算法有一个很大的弊端就是会产生循环引用
 * 2、标记清楚
 * 这个算法是设置一个根对象，垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于那些没有引用到的对象，就认为是不可用的对象
 * 这个算法可以很好的解决循环引用的问题
 */