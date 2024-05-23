interface DateInfoProps {
  publishedOn: string;
  lastUpdated: string;
}

const DateInfo = ({ publishedOn, lastUpdated }: DateInfoProps) => (
    <div className="date-info-container">
      <p className="published-on">Investors Page published on: {publishedOn}</p>
      <p className="last-updated">Last updated: {lastUpdated}</p>
    </div>
  );

export default DateInfo;
