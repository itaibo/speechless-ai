export default class Speechless {
  public readonly chat = {
    completions: {
      create: async (_input: any): Promise<string> => {
        await new Promise((r) => setTimeout(r, 400));
        return '😮';
      },
    },
  };
}
