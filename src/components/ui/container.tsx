interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='mx-auto mt-14 w-full p-4 antialiased md:mt-7 md:max-w-screen-lg'>
      {children}
    </div>
  )
}
