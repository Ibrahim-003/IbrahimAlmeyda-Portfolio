import BranchIcon from "../../assets/branch.svg?react";

const HeaderLogo: React.FC = () => {
    return (
      <h1>
        <a href='/' className='font-medium flex items-center gap-1'>
          <BranchIcon width={24} height={24} className="dark:text-white" aria-label="logo" />
          <span>IbrahimAlmeyda</span>
        </a>
      </h1>
    );
}

export default HeaderLogo;
