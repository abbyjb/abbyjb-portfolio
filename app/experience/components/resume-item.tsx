type ResumeItemProps = {
  company: string;
  job_title: string;
  dates_worked: string;
  accomplishments: Array<string>;
};

export default function ResumeItem({company, job_title, dates_worked, accomplishments}: ResumeItemProps) {
  return (
    <section className="mb-5">
      <div className="flex items-end justify-between">
        <h3 className="text-2xl flex-grow">{company}</h3>
        <p className="text-lg">{dates_worked}</p>
      </div>
      <p className="italic">{job_title}</p>
      <div>
        <ul className="list-disc p-2 m-2">
          {accomplishments.map((accomplishment, index) => {
            return <li key={`${company}-${index}`}>{accomplishment}</li>
          })}
        </ul>
      </div>
    </section>
  );
}