export default function UserDetail({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>
}