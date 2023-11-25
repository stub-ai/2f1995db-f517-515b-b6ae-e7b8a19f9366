export class LoginEvent {
  constructor(public username: string, public password: string) {}
}

export class LogoutEvent {
  constructor(public username: string) {}
}