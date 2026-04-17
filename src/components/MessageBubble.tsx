import { Box, Paper, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Props {
    question: string;
    answer: string;
    onCopy: (text: string) => void;
}

export const MessageBubble = ({ question, answer, onCopy }: Props) => {
    return (
        <Box sx={{ mb: 3 }}>

            {/* User */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Paper
                    sx={{
                        p: 2,
                        maxWidth: '70%',
                        bgcolor: 'primary.main',
                        color: '#fff',
                        borderRadius: 3
                    }}
                >
                    <Typography>{question}</Typography>
                </Paper>
            </Box>

            {/* AI */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Paper
                    sx={{
                        p: 2,
                        maxWidth: '75%',
                        borderRadius: 3,
                        position: 'relative'
                    }}
                >
                    <Typography>{answer}</Typography>

                    <IconButton
                        size="small"
                        onClick={() => onCopy(answer)}
                        sx={{ position: 'absolute', top: 5, right: 5 }}
                    >
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};