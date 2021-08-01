import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Verify({ phone }) {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState('')

  const handleVerify = async ({ token }) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.verifyOTP({
        phone,
        token,
      })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">
          SMSに送信された6桁のワンタイムパスワードを入力してください
        </p>
        <div>
          <input
            className="inputField"
            type="text"
            placeholder="ワンタイムパスワード"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleVerify({ token })
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
