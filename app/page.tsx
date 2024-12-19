import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, Zap, Shield, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-12 text-center md:gap-8 md:py-24">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            An AI chatbot built with Next.js, AI SDK, and GPT-4
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Experience intelligent conversations powered by state-of-the-art AI.
            Start chatting now to explore the possibilities.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/chat">Start Chatting</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </main>

      {/* Features Section */}
      <section className="w-full border-t bg-muted/40 py-12 md:py-24">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg bg-primary p-2 text-primary-foreground">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Natural Conversations</h3>
            <p className="text-muted-foreground">
              Engage in fluid, context-aware conversations that feel natural and intuitive.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg bg-primary p-2 text-primary-foreground">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Get instant responses powered by state-of-the-art AI technology.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg bg-primary p-2 text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your conversations are encrypted and your privacy is protected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full border-t py-12 md:py-24">
        <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
          <div className="rounded-lg bg-primary/10 p-2">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to get started?
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Join thousands of users who are already experiencing the future of AI conversation.
          </p>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Free plan includes 100 messages per month.{' '}
              <Link href="/terms" className="underline underline-offset-2">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col gap-4 px-4 md:h-24 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://chriscelaya.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Christopher Celaya
            </a>
            .
          </p>
          <nav className="flex items-center justify-center gap-4 md:justify-end">
            <Link
              href="/privacy"
              className="text-sm underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

