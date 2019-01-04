class TimerElement extends HTMLElement {
  connectedCallback() {
   this.render();
   this.interval = setInterval(() => this.render(), 1000);
  }
 
  disconnectedCallback() {
   clearInterval(this.interval); //очистка
  }

  render() {
    this.innerHTML = `
     <div>${new Date().toLocaleString({hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
    `;
  }

}

customElements.define('timer-element', TimerElement);
