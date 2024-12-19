'use client'

import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import { ArrowUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { AutoResizeTextarea } from '@/components/autoresize-textarea'

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { messages, input, setInput, append } = useChat({
    api: '/api/chat',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    void append({ content: input, role: 'user' })
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const header = (
    <header className="m-auto flex max-w-96 flex-col gap-5 text-center">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Basic AI Chatbot Template
      </h1>
      <p className="text-muted-foreground text-sm">
        This is an AI chatbot app template built with{' '}
        <span className="text-foreground">Next.js</span>, the{' '}
        <span className="text-foreground">Vercel AI SDK</span>, and{' '}
        <span className="text-foreground">Vercel KV</span>.
      </p>
      <p className="text-muted-foreground text-sm">
        Connect an API Key from your provider and send a message to get started.
      </p>
    </header>
  )

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {messages.map((message, index) => (
        <div
          key={index}
          data-role={message.role}
          className={cn(
            'max-w-[80%] rounded-xl px-3 py-2 text-sm',
            'data-[role=assistant]:self-start data-[role=user]:self-end',
            'data-[role=assistant]:bg-muted data-[role=user]:bg-primary',
            'data-[role=assistant]:text-foreground data-[role=user]:text-primary-foreground'
          )}
        >
          {message.content}
        </div>
      ))}
    </div>
  )

  return (
    <main
      className={cn(
        'ring-none mx-auto flex h-svh max-h-svh w-full max-w-[50rem] flex-col items-stretch border-none px-4',
        className
      )}
      {...props}
    >
      <div className="flex-1 content-center overflow-y-auto">
        {messages.length ? messageList : header}
      </div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          'relative mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm',
          'border-input bg-background',
          'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/10 focus-within:ring-offset-0'
        )}
      >
        <AutoResizeTextarea
          onKeyDown={handleKeyDown}
          onChange={v => setInput(v)}
          value={input}
          placeholder="Enter a message"
          className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="absolute bottom-1 right-1 size-6 rounded-full"
              disabled={!input.trim()}
            >
              <ArrowUpIcon size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>Submit</TooltipContent>
        </Tooltip>
      </form>
    </main>
  )
}

