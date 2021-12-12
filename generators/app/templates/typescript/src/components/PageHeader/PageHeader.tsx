import './PageHeader.scss';

export interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
  <div className="page-header">
    <h2>{title}</h2>
    <p className="t-heavy">{description}</p>
  </div>
);

export default PageHeader;
