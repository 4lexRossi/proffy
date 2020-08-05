import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/62000504?s=460&u=9077ec8b32016a8accbb59dfc8e6d217b7b1b468&v=4" />
        <div>
          <strong>Alex Rossi</strong>
          <span>Karatê</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /><br />
            Eveniet corporis cum ipsam amet ab, labore illo! Dolores animi fugiat molestiae? Amet illo hic, blanditiis nesciunt recusandae ab inventore reiciendis labore.
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$: 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;