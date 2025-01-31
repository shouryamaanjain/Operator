import os

from posthog import Posthog
from supabase import create_client

env = os.getenv("ENV")
is_prod = env == "prod"
if not is_prod:
    from dotenv import load_dotenv

    load_dotenv()

TIMEOUT = 30

# Supabase client
supabase = create_client(os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_KEY"))

# Posthog client
if is_prod:
    posthog = Posthog(os.environ.get("POSTHOG_API_KEY"), os.environ.get("POSTHOG_HOST"))
else:
    posthog = Posthog("", "", disabled=True)
models = {
    "GPT-4": "gpt-4-turbo-preview",
}
