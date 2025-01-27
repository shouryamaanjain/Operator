import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Plot a graph of a NVDA stock',
    message: `Plot a graph of the NVDA stock performance for the last 30 days`
  },
  {
    heading: 'Download photo of the day from NASA',
    message: 'Download photo of the day from NASA website, make it black and white and convert the photo to .png'
  },
  {
    heading: 'Download a random GIF from Tenor',
    message: `Download a random gif from tenor`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to Emplode Operator!</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Operator is the easiest way to use an AI agent in the browser.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          Specify a task, and Operator will write and execute code to complete
          it.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          You&apos;ll find it useful for CSV analysis, image manipulation, or
          web scraping.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          Try one of the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
