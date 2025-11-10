import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import {
  LocalShipping,
  Inventory,
  Speed,
  Security,
  TrendingUp,
  CheckCircle,
  LocationOn,
  QrCode2,
  Analytics,
  ArrowForward,
} from '@mui/icons-material';

const AnimatedBox = motion(Box);
const AnimatedCard = motion(Card);

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <Typography ref={ref} variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
      {count.toLocaleString()}{suffix}
    </Typography>
  );
};

// Feature Card — now respects theme mode
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isDark = theme.palette.mode === 'dark';

  return (
    <AnimatedCard
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      sx={{
        height: '100%',
        background: isDark
          ? 'linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.9))'
          : 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,247,250,0.9))',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': {
          borderColor: 'primary.main',
          '& .feature-icon': {
            transform: 'rotate(360deg) scale(1.1)',
            background: 'linear-gradient(135deg, #1976D2, #42A5F5)',
          },
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          className="feature-icon"
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #42A5F5, #90CAF9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Icon sx={{ fontSize: 24, color: 'white' }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.1rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </AnimatedCard>
  );
};

const StatCard = ({ icon: Icon, value, label, color, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <AnimatedCard
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      sx={{
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${color}30`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -15,
          right: -15,
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: `${color}10`,
          filter: 'blur(20px)',
        }}
      />
      <CardContent sx={{ p: 2, position: 'relative' }}>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 1.5,
              background: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 20, color: 'white' }} />
          </Box>
          <Box>
            <AnimatedCounter end={value} />
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              {label}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </AnimatedCard>
  );
};

export default function Dashboard() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const features = [
    { icon: QrCode2, title: 'Real-Time Tracking', description: 'Track your shipments in real-time with advanced GPS and barcode scanning technology.' },
    { icon: Analytics, title: 'Advanced Analytics', description: 'Get detailed insights and analytics on your logistics operations with interactive dashboards.' },
    { icon: Security, title: 'Secure & Compliant', description: 'Enterprise-grade security with full compliance to international logistics standards.' },
    { icon: Speed, title: 'Lightning Fast', description: 'Optimized performance ensures quick access to critical information when you need it.' },
  ];

  const stats = [
    { icon: LocalShipping, value: 15420, label: 'Total Shipments', color: '#1976D2' },
    { icon: CheckCircle, value: 98, label: 'On-Time Delivery %', color: '#4CAF50' },
    { icon: Inventory, value: 8750, label: 'Active Materials', color: '#FF9800' },
    { icon: LocationOn, value: 142, label: 'Distribution Centers', color: '#9C27B0' },
  ];

  const steps = [
    { icon: QrCode2, title: 'Scan & Register', description: 'Register materials with QR/barcode scanning' },
    { icon: Inventory, title: 'Track Inventory', description: 'Monitor stock levels in real-time' },
    { icon: LocalShipping, title: 'Ship & Track', description: 'Track shipments across the supply chain' },
    { icon: Analytics, title: 'Analyze & Optimize', description: 'Get insights to optimize operations' },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0A1929 0%, #1976D2 50%, #42A5F5 100%)',
          overflow: 'hidden',
          mb: 6,
        }}
      >
        {/* Floating lights */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(30px)',
            }}
          />
        ))}

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <AnimatedBox
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                  }}
                >
                  Track & Trace
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, #90CAF9, #FFFFFF)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Made Simple
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3, fontWeight: 400 }}
                >
                  Integrated Logistics Management System for seamless supply chain operations
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    variant="contained"
                    size="medium"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        transform: 'scale(1.03)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <LocalShipping sx={{ fontSize: 140, color: 'rgba(255, 255, 255, 0.9)' }} />
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={2}>
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <StatCard {...stat} delay={i * 0.05} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <AnimatedBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 5 }}
        >
          <Typography variant="h3" sx={{ mb: 1.5, fontWeight: 700, fontSize: '2rem' }}>
            Powerful Features
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
            Everything you need to manage your logistics operations efficiently
          </Typography>
        </AnimatedBox>

        <Grid container spacing={3}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <FeatureCard {...feature} delay={i * 0.05} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box
        sx={{
          bgcolor: isDark ? 'background.default' : 'grey.50',
          py: 8,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <AnimatedBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: 5 }}
          >
            <Typography variant="h3" sx={{ mb: 1.5, fontWeight: 700, fontSize: '2rem' }}>
              How It Works
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Simple steps to streamline your logistics
            </Typography>
          </AnimatedBox>

          <Grid container spacing={3} alignItems="center">
            {steps.map((step, i) => (
              <Grid item xs={12} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Stack alignItems="center" spacing={1.5} sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${i % 2 === 0 ? '#1976D2' : '#42A5F5'}, ${
                          i % 2 === 0 ? '#42A5F5' : '#90CAF9'
                        })`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 6px 16px rgba(25, 118, 210, 0.2)',
                        position: 'relative',
                      }}
                    >
                      <step.icon sx={{ fontSize: 28, color: 'white' }} />
                      <Chip
                        label={i + 1}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: -6,
                          right: -6,
                          bgcolor: 'white',
                          color: 'primary.main',
                          fontWeight: 700,
                          height: 20,
                          width: 20,
                          fontSize: '0.65rem',
                          minWidth: 0,
                        }}
                      />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {step.description}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <AnimatedCard
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{
            background: 'linear-gradient(135deg, #1976D2, #42A5F5)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(40px)',
            }}
          />
          <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative' }}>
            <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 700 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 3, opacity: 0.9 }}>
              Join thousands of companies optimizing their logistics operations
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'scale(1.03)',
                },
              }}
            >
              Start Free Trial
            </Button>
          </CardContent>
        </AnimatedCard>
      </Container>
    </Box>
  );
}
