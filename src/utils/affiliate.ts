export interface RetailLink {
  url: string;
  isAffiliate: boolean;
}
/**
 * Affiliate networks use different tracking formats. The approved tracking
 * template is therefore supplied unchanged by the partner account, with only
 * documented Last Season placeholders substituted at build time.
 */
export function buildRetailLink(
  directUrl: string,
  template: string | undefined,
  query: string,
  context: string,
): RetailLink {
  const approvedTemplate = template?.trim();
  if (!approvedTemplate) return { url: directUrl, isAffiliate: false };

  return {
    url: approvedTemplate
      .replaceAll("{destination}", encodeURIComponent(directUrl))
      .replaceAll("{query}", encodeURIComponent(query))
      .replaceAll("{context}", encodeURIComponent(context)),
    isAffiliate: true,
  };
}
