export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    TEST_ENV_VAR: process.env.TEST_ENV_VAR || "UNDEFINED",
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST || "UNDEFINED",
    NODE_ENV: process.env.NODE_ENV || "UNDEFINED",
    AWS_REGION: process.env.AWS_REGION || "UNDEFINED",
  });
}
