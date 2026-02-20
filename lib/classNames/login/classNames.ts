export const classNames = {
  pageContainer:
    "flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950",
  card: "w-full max-w-md rounded-xl bg-white p-8 shadow-sm dark:bg-zinc-900 dark:shadow-zinc-900/50 sm:p-10",

  pageTitle: "mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50",
  formLabel: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
  formError: "text-sm text-red-500",

  formContainer: "flex flex-col gap-6",
  formField: "flex flex-col gap-2",
  formInput:
    "rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500",
  formButton:
    "mt-2 rounded-lg bg-zinc-900 px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
} as const;
