import { configureStore, createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  question: string;
  answer: string;
}

interface ChatState {
  messages: Message[];
  loading: boolean;
}

export const askQuestion = createAsyncThunk<Message, string>(
  'chat/askQuestion',
  async (question: string) => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data: { answer: string } = await res.json();
    return { question, answer: data.answer };
  }
);

const initialState: ChatState = {
  messages: [],
  loading: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(askQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(askQuestion.fulfilled, (state, action: PayloadAction<Message>) => {
        state.loading = false;
        state.messages.push(action.payload);
      })
      .addCase(askQuestion.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;