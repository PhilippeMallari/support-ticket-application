import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'

export default function NewTicket() {

    const {user} = useSelector((state) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }

    return (
        <>
            <section className="heading">
                <h1>Create New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label>
                    <input type="text" className="form-control" value={name} disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Customer Email</label>
                    <input type="text" className="form-control" value={email} disabled/>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                            <select name="product" id="product" value={product} onchange={(e) => setProduct(e.target.value)}>
                                <option value="iPhone">iPhone</option>
                                <option value="Android">Android</option>
                                <option value="BlackBerry">BlackBerry</option>
                                <option value="Windows Phone">Windows Phone</option>
                                <option value="Macbook Pro">Macbook Pro</option>
                                <option value="iMac">iMac</option>
                                <option value="iPad">iPad</option>
                                {/* iPhone', 'Android', 'BlackBerry', 'Windows Phone', 'Macbook Pro', 'iMac', 'iPad */}
                            </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of the issue</label>
                        <textarea name="description" id="description" className='form-control' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
