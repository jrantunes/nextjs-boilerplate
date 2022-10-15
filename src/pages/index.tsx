type Props = {
  title: string;
}

export default function Home({ title = "Hello World" }: Props) {
  return (
    <h1>{title}</h1>
  )
}
