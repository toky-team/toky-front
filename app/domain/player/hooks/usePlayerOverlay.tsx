import { useOverlay } from "@/common/hooks/useOverlay";
import { useCallback } from "react";
import type { PlayerInterface } from "@/lib/types/player";
import PlayerOverlay from "../components/PlayerOverlay";

export function usePlayerOverlay() {
  const overlay = useOverlay();
  
  const openPlayerOverlay = useCallback((player: PlayerInterface) => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, exit }) => (
        <PlayerOverlay 
          isOpen={isOpen} 
          player={player}
          onClose={() => {
            exit();
            resolve(true);
          }} 
        />
      ));
    });
  }, [overlay]);

  return { openPlayerOverlay };
}