export class EventBus {
  private listeners: { [key: string]: Array<(event: any) => void> } = {};

  subscribe<T extends { new (...args: any[]): any }>(eventType: T, callback: (event: InstanceType<T>) => void): void {
    const eventName = eventType.name;
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  unsubscribe<T extends { new (...args: any[]): any }>(eventType: T, callback: (event: InstanceType<T>) => void): void {
    const eventName = eventType.name;
    if (!this.listeners[eventName]) return;
    this.listeners[eventName] = this.listeners[eventName].filter(listener => listener !== callback);
  }

  dispatch<T extends { constructor: Function }>(event: T): void {
    const eventName = event.constructor.name;
    if (!this.listeners[eventName]) return;
    this.listeners[eventName].forEach(callback => callback(event));
  }
}