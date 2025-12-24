"use client";

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import * as React from "react";

interface InfiniteScrollTriggerProps {
  canLoadMore: boolean;
  isLoadingMore: boolean;
  onLoadMore: () => void;
  loadMoreText?: string;
  noMoreText?: string;
  className?: string;
}

export const InfiniteScrollTrigger = React.forwardRef<
  HTMLDivElement,
  InfiniteScrollTriggerProps
>(function InfiniteScrollTrigger(
  {
    canLoadMore,
    isLoadingMore,
    onLoadMore,
    loadMoreText = "Load more",
    noMoreText = "No more items",
    className,
  },
  ref
) {
  let text = loadMoreText;
  if (isLoadingMore) text = "Loading...";
  else if (!canLoadMore) text = noMoreText;

  return (
    <div ref={ref} className={cn("flex w-full justify-center py-2", className)}>
      <Button
        disabled={!canLoadMore || isLoadingMore}
        onClick={onLoadMore}
        size="sm"
        variant="ghost"
      >
        {text}
      </Button>
    </div>
  );
});

InfiniteScrollTrigger.displayName = "InfiniteScrollTrigger";
