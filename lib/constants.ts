const CHAT_API_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'https://api.emplode.com/chat'
    : `${process.env.NEXT_PUBLIC_OPERATOR_API_URL}/chat`
export { CHAT_API_ENDPOINT }
