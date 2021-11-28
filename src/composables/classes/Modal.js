const MODAL_TYPES = {
  SUCCESS: 'SUCCESS',
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  ERROR: 'ERROR'
}

export class Modal {
  #type = ''
  #icon = ''
  #title = ''
  #confirm = ''
  #reject = 'Close'
  _onConfirm = () => {}

  constructor(type) {
    this.#type = type
  }

  static success() {
    return new Modal(MODAL_TYPES.SUCCESS).setIcon('tick')
  }

  static error() {
    return new Modal(MODAL_TYPES.ERROR).setIcon('error')
  }

  static addTodo() {
    return new Modal(MODAL_TYPES.ADD_TODO)
  }

  static deleteTodo() {
    return new Modal(MODAL_TYPES.DELETE_TODO)
  }

  get type() {
    return this.#type
  }

  set type(text) {
    this.#type = text
  }

  get icon() {
    return this.#icon
  }

  set icon(icon) {
    this.#icon = icon
  }

  get title() {
    return this.#title
  }

  set title(text) {
    this.#title = text
  }

  get confirm() {
    return this.#confirm
  }

  set confirm(text) {
    this.#confirm = text
  }

  get reject() {
    return this.#reject
  }

  set reject(text) {
    this.#reject = text
  }

  onConfirm(callback) {
    this._onConfirm = callback
    return this
  }

  message(text) {
    this.title = text
    return this
  }

  setIcon(icon) {
    this.icon = icon
    return this
  }

  confirmText(text) {
    this.confirm = text
    return this
  }

  rejectText(text) {
    this.reject = text
    return this
  }

  getModalAttributes() {
    return {
      type: this.type,
      title: this.title,
      confirm: this.confirm,
      reject: this.reject,
      icon: this.icon,
      onConfirm: this._onConfirm
    }
  }

  show(showModal) {
    showModal(this.getModalAttributes())
  }
}
