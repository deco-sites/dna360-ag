export interface Props {
  title: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
