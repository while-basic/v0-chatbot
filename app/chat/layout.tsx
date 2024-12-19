import { SidebarProvider } from '@/components/ui/sidebar'
import { ConversationsSidebar } from '@/components/conversations-sidebar'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-[calc(100vh-4rem)]">
        <ConversationsSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  )
}

