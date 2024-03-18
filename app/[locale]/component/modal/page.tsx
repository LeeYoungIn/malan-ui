'use client'
import { useState } from 'react'
import { Button, Modal } from '@ui/components'

export default function () {
  const [modal1, toggleModal1] = useState(false)
  return <>
    <section>
      <h3>Default</h3>
      <div className="grid place-items-center">
        <Button onClick={() => toggleModal1(true)}>Open</Button>
        <Modal
          title="Modal Title"
          visible={modal1} onClose={() => toggleModal1(false)}>
          <p>This is Modal 1.</p>
        </Modal>
      </div>
    </section>
  </>
}