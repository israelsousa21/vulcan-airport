import styles from '../styles/Form.module.css'

export default function Form() {
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
    </div>
  )
}
