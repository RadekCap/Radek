#!/bin/bash
# Claude Code Status Line - displays model, cost, context, directory, git branch, lines changed, duration

input=$(cat)

# Extract data from JSON
MODEL=$(echo "$input" | jq -r '.model.display_name // "?"')
COST=$(echo "$input" | jq -r '.cost.total_cost_usd // 0')
CTX=$(echo "$input" | jq -r '.context_window.used_percentage // 0' | xargs printf "%.0f")
DIR=$(echo "$input" | jq -r '.workspace.current_dir // "?"' | xargs basename)
ADDED=$(echo "$input" | jq -r '.cost.total_lines_added // 0')
REMOVED=$(echo "$input" | jq -r '.cost.total_lines_removed // 0')
DURATION_MS=$(echo "$input" | jq -r '.cost.total_duration_ms // 0')

# Calculate duration in minutes:seconds
DURATION_SEC=$((DURATION_MS / 1000))
DURATION_MIN=$((DURATION_SEC / 60))
DURATION_SEC_REM=$((DURATION_SEC % 60))
DURATION="${DURATION_MIN}m${DURATION_SEC_REM}s"

# Get git branch (if in a git repo)
BRANCH=$(git branch --show-current 2>/dev/null || echo "")
[ -n "$BRANCH" ] && BRANCH=" $BRANCH |" || BRANCH=""

# Format cost with 2 decimal places
COST_FMT=$(printf "%.2f" "$COST")

# Output status line
echo "[$MODEL] $DIR |$BRANCH \$${COST_FMT} | +${ADDED}/-${REMOVED} | ctx:${CTX}% | ${DURATION}"
