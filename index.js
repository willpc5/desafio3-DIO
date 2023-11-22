/* 
Essa foi a melhor forma que eu encontrei para resolver o problema.
*/
let hero = {
  name: 'Willams',
  age: 29,
  type: 'mago',
  ataque: 'magia',

  atacar: function () {
    if (this.type === 'mago' && this.ataque === 'magia') {
      console.log(`O ${this.type} atacou usando ${this.ataque}`)
    } else if (this.type === 'guerreiro' && this.ataque === 'espada') {
      console.log(`O ${this.type} atacou usando ${this.ataque}`)
    } else if (this.type === 'monge' && this.ataque === 'artes marciais') {
      console.log(`O ${this.type} atacou usando ${this.ataque}`)
    } else if (this.type === 'ninja' && this.ataque === 'shuriken') {
      console.log(`O ${this.type} atacou usando ${this.ataque}`)
    } else {
      console.log(`Escolha o herói e ataque correto.`)
    }
  }
}

hero.atacar()
