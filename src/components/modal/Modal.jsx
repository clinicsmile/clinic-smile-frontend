/*import React from "react";
import { useState } from "react";


function Modalb(mod){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        if (mod = true){
            toggleModal
        }
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>
                    papaya
                </h2>
            </div>
        </div>
        </>
    ); 
}


export default Modalb



import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function FormElements() {
  const [openModal, setOpenModal] = useState(<string | undefined>());
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  return (
    <>
      <Button onClick={() => props.setOpenModal('form-elements')}>Toggle modal</Button>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


<Button
pill color="warning" 
className="mx-auto w-32" 
onClick = {FormElements}
>
Crear
</Button> 


*/

