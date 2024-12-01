import connectDB from "@/lib/db/db";
import Blocklist from "@/models/blocklist";

interface BlockCheckParams {
  email: string;
}

interface BlockCheckResult {
  blocked: boolean;
  reason?: string;
}

export async function isBlocked({ email }: BlockCheckParams): Promise<BlockCheckResult> {
  try {
    await connectDB();

    const blockedEmail = await Blocklist.findOne({
      email: email.toLowerCase(),
      active: true // Only consider active blocks
    });

    if (blockedEmail) {
      return {
        blocked: true,
        reason: blockedEmail.reason
      };
    }

    return {
      blocked: false
    };
  } catch (error) {
    console.error("Error checking block status:", error);
    return {
      blocked: false // Default to not blocked in case of error
    };
  }
}
