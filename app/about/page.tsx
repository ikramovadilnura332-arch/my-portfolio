interface AboutPageProps {
  title: string;
  description: string;
}

function AboutCard({title, description}: AboutPageProps) {
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <h1>Biz haqimizda</h1>
      <AboutCard 
      title="Bizning Missiyamiz"
      description="Sifatli"
      />
    </div>
  );
}