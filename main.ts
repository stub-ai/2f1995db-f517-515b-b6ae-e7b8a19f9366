import { EventBus } from './EventBus';
import { LoginEvent, LogoutEvent } from './Events';

const eventBus = new EventBus();

eventBus.subscribe(LoginEvent, event => console.log(`User logged in: ${event.username}`));
eventBus.subscribe(LogoutEvent, event => console.log(`User logged out: ${event.username}`));

eventBus.dispatch(new LoginEvent('John', 'password123'));
eventBus.dispatch(new LogoutEvent('John'));