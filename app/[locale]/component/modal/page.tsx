'use client'
import { useState } from 'react'
import { Button, Modal } from '@ui/components'

export default function () {
  const [modal1, toggleModal1] = useState(false)
  const [modal2, toggleModal2] = useState(false)
  const [modal3, toggleModal3] = useState(false)

  return <>
    <section>
      <h3>Default</h3>
      <div className="grid place-items-center">
        <div>
          <Button onClick={() => toggleModal1(true)}>Open</Button>
          <Modal
            title="Modal Title"
            visible={modal1} onClose={() => toggleModal1(false)}>
            <p>This is Modal 1.</p>
          </Modal>
        </div>
      </div>
    </section>

    <section>
      <h3>With Footer</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <Button onClick={() => toggleModal2(true)}>OK</Button>
          <Modal
            title="Modal Title"
            visible={modal2}
            footer={<Button variant="clean">OK</Button>}
            onClose={() => toggleModal2(false)}>
            <p>This is Modal 1.</p>
          </Modal>
        </div>
        <div>
          <Button onClick={() => toggleModal3(true)}>OK & Cancel</Button>
          <Modal
            title="Modal Title"
            visible={modal3}
            footer={<>
              <Button variant="clean">OK</Button>
              <Button variant="clean">Cancel</Button>
            </>}
            onClose={() => toggleModal3(false)}>
            <p>This is Modal 1.</p>
          </Modal>
        </div>
      </div>
    </section>
  </>
}