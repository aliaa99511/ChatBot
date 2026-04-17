// components/EmptyState.tsx
import { Box, Typography } from '@mui/material';

export const EmptyState = () => {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#fff',
                textAlign: 'center'
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Where should we begin?
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.8, mt: 1 }}>
                Ask anything, generate code, or explore ideas
            </Typography>
        </Box>
    );
};