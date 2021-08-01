import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import Verify from './Verify'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [verifying, setVerifying] = useState(false)

  const handleLogin = async ({ phone, password }) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ phone })
      if (error) throw error
      alert('ワンタイムパスワードをSMSで確認してください！')
      setVerifying(true)
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  if (verifying) {
    return <Verify phone={phone} />
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">電話番号を入力してサインインする</p>
        <div>
          <input
            className="inputField"
            type="tel"
            placeholder="電話番号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin({ phone, password })
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? 'ローディング...' : '送信する'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
