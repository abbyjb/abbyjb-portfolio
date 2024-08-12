import Link from 'next/link';
import Download from '@/app/download.svg';

type ResumeSectionHeaderProps = {
  name: string;
  icon_button?: boolean;
}

export default function ResumeSectionHeader({ name, icon_button }: ResumeSectionHeaderProps) {
  return (
    <div className="flex mb-5 border-b-2 border-purple">
      <h2 className="grow text-4xl">{name}</h2>
      { icon_button && 
        <Link href="./Abigail_Bashore_Resume.pdf" target="_blank" download>
          <Download className="size-8"/>
        </Link>
      }
    </div>
  );
}