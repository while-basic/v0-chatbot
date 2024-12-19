'use client'

import { MessageCircle } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

// This would typically come from your database
const sampleConversations = [
  {
    id: '1',
    title: 'Getting Started with AI',
    date: 'Today',
  },
  {
    id: '2',
    title: 'Understanding Neural Networks',
    date: 'Today',
  },
  {
    id: '3',
    title: 'Machine Learning Basics',
    date: 'Yesterday',
  },
  {
    id: '4',
    title: 'Data Science Questions',
    date: 'Yesterday',
  },
]

export function ConversationsSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-4 py-2">
        <h2 className="text-lg font-semibold">Conversations</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Recent</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sampleConversations.map(conversation => (
                <SidebarMenuItem key={conversation.id}>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="line-clamp-1">{conversation.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

