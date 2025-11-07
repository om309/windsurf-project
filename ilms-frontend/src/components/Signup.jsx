import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { AuthAPI } from '../services/APIService';

export default function Signup({ onSignedUp, onGoLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await AuthAPI.signup({ email, name, password });
      localStorage.setItem('token', res.token);
      onSignedUp?.();
    } catch (err) {
      setError('Signup failed. Email may already be registered.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', p: 2 }}>
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 480, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Create account</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>Sign up to start using TraceRoo ILMS</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
          <TextField label="Full name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 1 }}>
            {loading ? 'Creating account...' : 'Sign up'}
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link component="button" onClick={() => onGoLogin?.()}>Sign in</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
