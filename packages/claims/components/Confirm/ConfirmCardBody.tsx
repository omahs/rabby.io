import React from 'react';
import { useDetectUncancelled } from '../../utils/useDetectUncancelled';
import { PostClaimButton } from '../PostClaimButton';
import { ConfirmCheckbox } from './ConfirmCheckbox';
import { LostList } from './LostList';
import { UncancelledTip } from './UncancelledTip';
import { UserClaimList } from './UserClaimList';
import { useAccount } from 'wagmi';

interface ConfirmCardBodyProps {
  onSubmit: () => void;
}

export const ConfirmCardBody: React.FC<ConfirmCardBodyProps> = ({
  onSubmit
}) => {
  const { address = '0x0' } = useAccount();
  const uncancelled = useDetectUncancelled(address);
  const [checked, setChecked] = React.useState(false);
  console.log('???');
  return (
    <div className="p-6 space-y-8 text-center">
      <LostList />
      <UserClaimList />

      {uncancelled ? (
        <UncancelledTip />
      ) : (
        <>
          <ConfirmCheckbox onChecked={setChecked} />
          <PostClaimButton disabled={!checked} onSubmit={onSubmit} />
        </>
      )}
    </div>
  );
};
