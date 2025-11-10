import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function LevelBox({ level, totalBaseItems, children }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        border: `2px solid ${isDark ? theme.palette.divider : '#94a3b8'}`,
        borderRadius: 1,
        p: 2,
        m: 1,
        backgroundColor: isDark
          ? theme.palette.background.paper
          : theme.palette.background.default,
        boxShadow: isDark ? '0 1px 2px rgba(255,255,255,0.05)' : '0 1px 2px rgba(0,0,0,0.05)',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 700, color: theme.palette.text.primary }}
      >
        {level.levelName} ({level.levelCode})
      </Typography>

      <Typography variant="caption" color="text.secondary">
        Contains: {level.containedQuantity}
      </Typography>
      <br />

      <Typography variant="caption" color="text.secondary">
        Total items: {totalBaseItems}
      </Typography>

      <Box sx={{ mt: 1 }}>{children}</Box>
    </Box>
  );
}

export default function PackagingTreeView({ levels = [] }) {
  const computeTotals = (idx) => {
    let total = 1;
    for (let j = idx; j >= 0; j--) {
      const q = levels[j].containedQuantity || 1;
      total *= j === 0 ? 1 : q;
    }
    return total;
  };

  const renderNested = (i) => {
    const level = levels[i];
    const total = computeTotals(i);
    if (i === 0) {
      return (
        <LevelBox key={level.levelIndex} level={level} totalBaseItems={total} />
      );
    }
    return (
      <LevelBox key={level.levelIndex} level={level} totalBaseItems={total}>
        {renderNested(i - 1)}
      </LevelBox>
    );
  };

  if (!levels?.length) return null;

  return <Box>{renderNested(levels.length - 1)}</Box>;
}
