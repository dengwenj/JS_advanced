class DWJEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  emit(eventName, ...payload) {
    this.eventBus[eventName].forEach(item => {
      item.eventCallback.call(item.thisArg, ...payload)
    })
  }

  off() {

  }
}

const eventBus = new DWJEventBus()

eventBus.on('dwj', function (num, str) {
  console.log(num, str, this);
}, { name: 'dngwj' })

eventBus.emit('dwj', 123, 'zww')
eventBus.emit('dwj', 123333333333, 'zww')