type HireMeFeatureProps = {
  children: string | React.ReactNode;
  left?: boolean;
  aside: React.ReactNode;
}

const HireMeFeature = ({ children, aside, left = false }: HireMeFeatureProps) => {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {left ? aside : null}
      <p>{children}</p>
      {left ? null : aside}
    </div>
  )
}

export default HireMeFeature;