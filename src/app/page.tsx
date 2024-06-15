
export default function Home() {
    const skills = [
        'Javascript and Typescript',
        'C#/.Net, PHP, Node',
        'MSSQL, Postgres, MySQL',
        'Segment, Amplitude, Iterable, GTM'
    ]
  return (
    <main>
        <p>I am a Jacksonville, FL based, fullstack Software Engineer that likes to specialize in growth engineering.
            I enjoy working on ARR, Activation, Retention and PLG.</p>
        <div className="p-2">
            <p>Proficient in:</p>
            <ul className="pl-5 list-disc">
                {skills.map(((skill, i) =>
                        <li key={i}>{skill}</li>
                ))}
            </ul>
        </div>
    </main>
  );
}
